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

        DB::table('all_words')->insert([
            'id' => 11,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'النفط',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 12,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'يرتفع',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 13,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'قرب',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 14,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'دولارً',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 15,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'إلى',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 16,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'أعلى',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 17,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'مستوى',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 19,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'منذ',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 20,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'أواخر',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 21,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'الشهر',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        //Algerian dialect
        DB::table('all_words')->insert([
            'id' => 22,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'el-nepht',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 23,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => '9laa',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 24,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'krub',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 25,
            'dialect_id' => '4',
            'nature_id' => '2',
            'word' => 'dolar',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 26,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'le',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 27,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => '3aali',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 28,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'nivou',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 29,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'men',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 30,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'aakhir',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 31,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'el-chehar',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        //Arabic dialect
        DB::table('all_words')->insert([
            'id' => 32,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'نتائج',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 33,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'قوية',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 34,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'للشركات',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 35,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => '',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 36,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'تصعد',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 37,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'بالأسهم',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 38,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'الأميركية',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 39,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'ب',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

      //Algerian dialect
        DB::table('all_words')->insert([
            'id' => 40,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'resultat',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 41,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'kouwat',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 42,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'charikat',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 43,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'tal3at',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 44,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'bel',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 45,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'asshoum',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 46,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'marikania',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        //Dialect arabic
        DB::table('all_words')->insert([
            'id' => 47,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'الذهب',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 48,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'يرتفع',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);
        DB::table('all_words')->insert([
            'id' => 49,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'ل',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 50,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'الجلسة',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('all_words')->insert([
            'id' => 51,
            'dialect_id' => '2',
            'nature_id' => '2',
            'word' => 'الخامسة',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        //Algerian dialect
        DB::table('all_words')->insert([
            'id' => 52,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'dhab',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 53,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => '3la',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 54,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'lel',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 55,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'djelssa',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);


        DB::table('all_words')->insert([
            'id' => 56,
            'dialect_id' => '3',
            'nature_id' => '2',
            'word' => 'lkhamssa',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

    }
}
