import React, { useContext } from "react";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
import ToDoList from "../todos/ToDoList";

// Homepage of site.
// Shows welcome message or login/register buttons.
//
// Routed at /
//  Routes -> Homepage

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div className="Homepage">
      <div>
        {currentUser ? (
          <ToDoList />
        ) : (
          <div>
            <div className="info-one ">
              <h2 className="Homepage-title mb-3 font-weight-bold ">
                Freemind
              </h2>
            </div>
            <div className="p-welcome">
              <p>
                Welcome to our website, designed specifically for the modern
                woman who wants to take charge of her life and enjoy a
                stress-free routine. We understand the challenges of daily life
                and the importance of staying organized. That's why we offer a
                to-do list feature, helping you manage your tasks and stay on
                top of your responsibilities, reducing stress and worry. Our
                recipe search function complements this, giving you access to
                countless meal ideas to make meal planning and preparation
                effortless, saving you time and energy. Our goal is to make your
                life easier and less stressful, so you can focus on what matters
                most.. Whether you're a busy mom juggling work and family, or a
                career woman looking for ways to streamline your day-to-day
                routine, our app has everything you need to stay on top of
                things and enjoy a more balanced and fulfilling life.
              </p>
            </div>
            <div className="info-container">
              <div className="info-two col-background col-todos"></div>
              <div className="info-two">
                <p>
                  Our app is the ultimate productivity tool, featuring a
                  powerful to-do list that helps you stay organized and
                  accomplish more every day.
                </p>
              </div>
            </div>

            <div className="info-container">
              <div className="info-two">
                <p>
                  At Freemind, we understand the importance of a healthy and
                  balanced diet. That's why we make it easy for you to find
                  nutritious and delicious recipes that are tailored to your
                  dietary needs. We offer a variety of recipes that cater to
                  different diets, including vegan, vegetarian, gluten-free, and
                  more.
                </p>
              </div>
              <div className="info-two col-background col-recipes"></div>
            </div>

            <div className="info-container">
              <div className="info-two col-background"></div>
              <div className="info-two">
                <p>
                  We're constantly working to add more features to our app to
                  help you stay organized and stress-free. Join us today and
                  discover the power of our app. Let us help you take control of
                  your life and achieve your goals with ease!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
