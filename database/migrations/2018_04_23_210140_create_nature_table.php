<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNatureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nature', function (Blueprint $table) {
            $table->increments('id');
            $table->string('verb');
            $table->string('noun');
            $table->string('adjective');
            $table->string('adverb');
            $table->string('determinative');
            $table->string('preposition');
            $table->string('coordinator');
            $table->string('subordinator');
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
        Schema::dropIfExists('nature');
    }
}
