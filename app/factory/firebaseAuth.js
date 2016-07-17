// generates a  firebase auth instance 

loginDemo.factory("Auth", ["$firebaseAuth",
                            function($firebaseAuth){
                                return $firebaseAuth();
                            }]);