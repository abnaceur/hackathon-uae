<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Words;

class TranslatorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }



    /**
     * Define the index of the dialect.
     * @param  \Illuminate\Http\Request  $request
     * @return integer
     */

    public function dialectEnum (Request $request, int $i)
    {
        $switch = '';
        if ($i == 0)
            $switch = "Origin";

        if ($i == 1)
            $switch = "Target";

        if ($request['params']['dialect' . $switch] == "Standard arabic dialect")
            return 2;
        if ($request['params']['dialect' . $switch] == "Gulf dialect")
            return 1;
        if ($request['params']['dialect' . $switch] == "Algerian dialect")
            return 3;

        return 0;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function store(Request $request)
    {
        //Get the dialect Enum
        $dialectOrigin_id = $this->dialectEnum($request, 0);

        $dialectTarget_id = $this->dialectEnum($request, 1);

        //Get the phrase
        $phrase = $request['params']['phraseOrigin'];

        //Convert the phrase to an array of words
        $words = explode(" ", $phrase);


        $allWords = [];
        foreach ($words as $word) {
            $word_id = DB::table('all_words')
                ->select('id')
                ->where([
                    ['word', '=', $word],
                    ['dialect_id', '=', $dialectOrigin_id],
                ])
                ->get();

            $id = 0;
            foreach ($word_id as $key) {
                $id = $key->id;
            }

            $targetWord_id = DB::table('translation')
                ->select('word_id1')
                ->join('all_words', 'translation.word_id1', '=', 'all_words.id')
                ->where([
                    ['word_id2', '=', $id],
                    ['dialect_id', '=', $dialectTarget_id]
                ])
                ->get();

            $id1 = 0;
            foreach ($targetWord_id as $key) {
                $id1 = $key->word_id1;
            }

            $targetWord = DB::table('all_words')
                ->select('word')
                ->where([
                    ['id', '=', $id1],
                    ['dialect_id', '=', $dialectTarget_id]
                ])
                ->get();

            //The other way
            $targetWord_id1 = DB::table('translation')
                ->select('word_id2')
                ->join('all_words', 'translation.word_id2', '=', 'all_words.id')
                ->where([
                    ['word_id1', '=', $id],
                    ['dialect_id', '=', $dialectTarget_id]
                ])
                ->get();

            $id2 = 0;
            foreach ($targetWord_id1 as $key) {
                $id2 = $key->word_id2;
            }

            $targetWord1 = DB::table('all_words')
                ->select('word')
                ->where([
                    ['id', '=', $id2],
                    ['dialect_id', '=', $dialectTarget_id]
                ])
                ->get();


            if (!$targetWord->isEmpty())
                $allWords[] = $targetWord;
            if (!$targetWord1->isEmpty())
                $allWords[] = $targetWord1;

        }


        return $allWords;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
