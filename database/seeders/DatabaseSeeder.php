<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use GuzzleHttp\Promise\Create;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(6)->create();

        User::create([
            'name' => 'mohammed',
            'email' => 'simoboolz@gmil.com',
            'email_verified_at' => now(),
            'password' => 'fjkd', // password
            'remember_token' => Str::random(10)
        ]);
    }
}
