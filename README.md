# 3DG3-Clothing
### A React E-commerce Project

* The `dev` script runs the project for development

* You'll have to create and insert your own publishable key 
    and private keys with your own Stripe account

* This app has both an Express backend for the Stripe payments as
    well as a client folder that contains the actual frontend

* Remember to replace the config variable in your firebase.utils.js 
    with your own config object from the firebase dashboard    

* This can only be run locally unless you create your own firebase database. 
    If remote, be sure to add the address in the firebase console under
    auth/sign-in method/authorized addresses
    * Will post the DB structure soon

#### To-Do:
* Add comments to the project as needed

* Fix links to indivdual collections on the shop page
    
* *Update all `connect()()`-related code (`mapStateToProps`,`mapDispatchToProps`)
    with react-redux hooks (`useSelector` and `useDispatch`)
    * Update all react router related code with known hooks 
        * `{ nameOfParam} = useParams()` and `const history = useHistory()`

* Check and see which parts of the application could be optimized with lazy
    loading, memo, and PureComponent

* Add tests to the project as needed
    
* Add the cart to Firebase while utilizing its security rules