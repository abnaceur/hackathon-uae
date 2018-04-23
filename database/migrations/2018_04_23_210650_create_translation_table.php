<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('translation', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('word_id1');
            $table->foreign('word_id1')->references('id')->on('all_words');
            $table->unsignedInteger('word_id2');
            $table->foreign('word_id2')->references('id')->on('all_words');
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
        Schema::dropIfExists('translation');
    }
}
