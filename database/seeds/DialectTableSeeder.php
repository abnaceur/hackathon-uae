<?php
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class DialectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('dialect')->insert([
            'id' => 1,
            'dialect' => 'gulf',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('dialect')->insert([
            'id' => 2,
            'dialect' => 'standard',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);

        DB::table('dialect')->insert([
            'id' => 3,
            'dialect' => 'algerian',
            'created_at' => Carbon::today(),
            'updated_at' => Carbon::today(),
        ]);
    }
}
