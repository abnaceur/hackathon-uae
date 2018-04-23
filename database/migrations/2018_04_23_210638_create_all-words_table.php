<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('all_words', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('dialect_id');
            $table->foreign('dialect_id')->references('id')->on('dialect');
            $table->unsignedInteger('nature_id');
            $table->foreign('nature_id')->references('id')->on('nature');
            $table->string('word');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
