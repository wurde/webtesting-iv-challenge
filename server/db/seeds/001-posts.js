'use strict'

exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {id: 1, title: 'Bitcoin bites the bullet', content: 'It is sometimes said that there are no free lunches in cryptocurrency design, only tradeoffs. This is a frequent refrain from exasperated Bitcoiners seeking to explain why hot new cryptocurrency probably can’t deliver 10,000 TPS with the same assurances as Bitcoin.'},
        {id: 2, title: 'Your Focus Is Priceless. Stop Giving It Away', content: 'Much of what we know about the fragility of focus comes from the Battle of Britain. In the aftermath of World War II —as I learned while interviewing cognitive neuroscientists for my book on attention science, A Deadly Wandering — British scientists were trying to understand why Royal Air Force pilots and radar operators sometimes got distracted as they were defending their skies from Nazi bomb squads. It seemed absurd to think that these dedicated men and women, in the flush of a death battle, with the lives of their countrymen at stake, would zone out.'},
        {id: 3, title: 'The Crumbling Reputation of Granola Bars', content: 'Although Clif bars are oat-based and some varieties contain heart-healthy fats from peanuts, almonds, and hazelnuts, other varieties are quite high in added sugar and get a good portion of their fats from added oils which are less nutrient-rich than whole foods sources of fat. Compared to the wide array of bars out there, Clif bars fall in “middle of the pack” territory (bonus points for the company’s commitment to organic agriculture, which is important from both an ecological and sustainability standpoint).'}
      ]);
    });
};
