<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        //fake itu dummy data (palsu)
        for ($i = 0; $i < 20; $i++){

            DB::table('news')->insert([
                'title' => fake()->sentence(),
                'description' => fake()->paragraph(3, true),
                'category' => fake()->text(20),
                'author' => fake()->email()
            ]);
        }
    }
}
