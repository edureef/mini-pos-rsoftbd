<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::latest()->paginate(10);
        return Inertia::render("Group", compact("groups"));
    }

    public function store(Request $request, Group $group)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
        ]);

        $group->create($validtae);

        return redirect()->back();
    }

    public function update(Request $request, Group $group)
    {
        $validtae = $request->validate([
            'name' => ['required', 'max:50'],
        ]);
        $group->update($validtae);
        return redirect()->back();
    }

    public function destroy(Group $group)
    {
        $group->delete();
        return redirect()->back();
    }
}
