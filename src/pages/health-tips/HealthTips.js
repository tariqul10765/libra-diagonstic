import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import Tips from './tips/Tips';

const tips = [
    {
        title: 'Delish Knowledge',
        description: 'Think of this as healthy vegetarian cooking, made simple. Writer Alex is a registered dietitian, and her ingredient shopping tips and cooking videos — check out the one for vegan paella! — are the next best thing to an office visit. Vegetarians or anybody curious about the lifestyle can consider this blog their starter kit for plant-based recipes that range in ingredients and complexity.',
        imgUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/delish_knowledge_400x400.png?w=525'
    },
    {
        title: 'The Real Food Dietitians',
        description: 'This blog is for people who love their Instant Pot, slow cooker, and Whole30 plan. It features recipes for each, plus tips for meal prep efficiency. Not only are there tons of dietitian-authored recipes, but you can also opt in for customized meal plans.',
        imgUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/the_real_food_dietitians_400x400.png?w=525'
    },
    {
        title: 'Fit Bottomed Girls',
        description: 'For those who get frustrated with the status quo and ideals of what we “should” be, Fit Bottomed Girls offers a refreshing change of pace. The founders, both certified fitness pros, preach confidence and body positivity. They take a thoughtful approach to fitness, instead of quick, lose-fat-in-10-days results. Their roadmap to a healthier life is a combination of nutrition-packed recipes, doable daily workouts, and a good dose of meditation.',
        imgUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/fit_bottomed_girls_400x400.png?w=525'
    },
    {
        title: 'Fit Foodie Finds',
        description: 'Fit Foodie Finds is a wellness blog tailor-made for serial Instagram scrollers. The gorgeous photos of healthy meals are just as exciting as making them. Who knew oats could look so pretty? Healthy living posts primarily focus on recipes, but they also include workouts (booty, legs, you name it), do-it-yourself (DIY) beauty, mental health, and relationships. Style-conscious readers will love it, too, with its gallery after gallery of fashion articles.',
        imgUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/fit_foodie_finds_400x400.png?w=525'
    },
    {
        title: 'Mommypotamus',
        description: 'Moms looking for that trust-me-I’ve-been-there perspective and healthy ways to take care of their families and themselves will find it on Mommypotamus. This blog is full of information for pregnant women and first-time moms, touching on everything from ultrasound safety to birth plans. You’ll also find a wealth of content on motherhood, natural health, clean beauty, and more.',
        imgUrl: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/mommy_potamus_400x400.png?w=525'
    },
]
const HealthTips = () => {
    return (
        <div>
            <MDBContainer>
                <div>
                    <h1>The Best Healthy Living Blogs of 2021</h1>
                    <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/Healthy-living-best-blog-2020-1296x728-header-1296x728.jpg?h=3019" width='100%' height='400' alt="" />
                    <p>Living a healthier life might seem like a tall order — the nutrition, the exercise, the inner happiness! But having some friendly advice at your disposal, whenever and wherever you need it, makes it easier and more fun. With just a click, these awesome blogs filled with tips, tricks, and personal stories will inspire you on your journey to wellness.</p>
                </div>
                {
                    tips.map((tip, index) => <Tips tip={tip}></Tips>)
                }
            </MDBContainer>
        </div>
    );
};

export default HealthTips;