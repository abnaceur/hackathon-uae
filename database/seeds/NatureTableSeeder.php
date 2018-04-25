<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class NatureTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Add natures

        DB::table('nature')->insert([
            'id' => 1,
            'nature' => 'verb',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 2,
            'nature' => 'noun',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 3,
            'nature' => 'adjective',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 4,
            'nature' => 'adverb',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 5,
            'nature' => 'determinative',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);



        DB::table('nature')->insert([
            'id' => 6,
            'nature' => 'preposition',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 7,
            'nature' => 'coordinator',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('nature')->insert([
            'id' => 8,
            'nature' => 'subordinator',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);
    }
}
