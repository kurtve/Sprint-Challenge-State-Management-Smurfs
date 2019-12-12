1. What problem does the context API help solve?

It allows us to have a single state store which we can make accessible to any child component without needing to pass the state through props at each level.


2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

'Actions' are descriptions of each task our app needs perform which affects the state of the app.
'Reducers' are the functions that actually carry out the actions that are dispatched to it.
The 'store' is the central state of the app.  It is a 'single source of truth' because all components can interact with this state directly (via actions and reducers) instead of maintaining their own copies of the state.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the main state of the app -- in a way this can be thought of as the global variables for the app.  This contains data that is meaningful to the app as a whole.  Component state is state which is needed only for a single component.  A good example of this would be form input fields, which need to be maintained in the local form component but are not needed outside of the form.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows redux to expose the dispatcher to the reducer function.  This allows us to call the dispatcher multiple times as needed for a single action.  A good example of this would be for asynchronous function calls, such as using axios to query an API.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

I liked the context API the best, by far.  It is simple to implement and easy to understand and use.  For the simple apps that we are creating for class, it is often all that is needed to cleanly maintain state.
