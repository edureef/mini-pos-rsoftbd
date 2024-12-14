<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->paginate(10);
        return Inertia::render('users/UserList', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('users/CreateUser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8'],
            'role' => ['required'],
            'phone_number' => ['required', 'max:15'],
        ]);

        try {
            User::create($validated);
            return redirect()->route('users.index');
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['error' => 'Failed to create user.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Inertia::render('users/EditUser', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email', "unique:users,email,{$user->id}"],
            'role' => ['required'],
            'phone_number' => ['required', 'max:15'],
        ]);

        try {
            $user->update($validated);
            return redirect()->route('users.index');
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['error' => 'Failed to update user.']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user): \Illuminate\Http\RedirectResponse
    {
        try {
            $user->delete();
            return redirect()->back();
        } catch (\Exception $exception) {
            return redirect()->back()->withErrors(['error' => 'Failed to delete user.']);
        }
    }
}
