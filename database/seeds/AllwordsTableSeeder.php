<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class AllwordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Algerian dialect
        DB::table('all_words')->insert([
            'id' => 1,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'anaya',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 2,
            'dialect_id' => '3',
            'nature_id' => '1',
            'word' => 'nebghi',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 3,
            'dialect_id' => '3',
            'nature_id' => '1',
            'word' => 'nel3ab',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 4,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'korat',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 5,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'elkadam',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        //Standard Arabic
        DB::table('all_words')->insert([
            'id' => 6,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'أنا',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 7,
            'dialect_id' => '2',
            'nature_id' => '1',
            'word' => 'أحب',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 8,
            'dialect_id' => '2',
            'nature_id' => '1',
            'word' => 'لعب',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 9,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'كرة',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 10,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'القدم',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);
    }
}
