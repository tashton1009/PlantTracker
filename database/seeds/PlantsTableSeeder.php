<?php

use Illuminate\Database\Seeder;
use App\Plant;

class PlantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = \Faker\Factory::create();

      // Create 50 product records
      for ($i = 0; $i < 50; $i++) {
          Plant::create([
              'name' => $faker->name,
              'sunlight' => $faker->word
          ]);
      }
    }
}
