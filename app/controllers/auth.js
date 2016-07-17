loginDemo.controller("authCtrl", ["$scope", "Auth", function($scope, Auth){
    
   
    
    //listen for status change
    
        $scope.auth = Auth;
        $scope.auth.$onAuthStateChanged(function(firebaseUser){
            $scope.firebaseUser = firebaseUser;
            
            if($scope.firebaseUser){
                console.log($scope.firebaseUser.email)
            } else {
                console.log("no user logged in");
            }
        });
    
    
    // create a new user 
    
    $scope.registerUser = function(){
        $scope.message = null;
        $scope.error = null;
        
        Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password);
     
        // clear the input fields
            
        
        
    }; // end register user
    
    // sign in a user

    $scope.signIn = function(){
        $scope.message = null;
        $scope.error = null;
        
        Auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password);
    };  

// sign out a user

    $scope.signOut = function(){
      Auth.$signOut();  
    };

// delete a user
    
    
    
}]); // end AuthCtrl






// clear register window

