import React, {Component} from 'react';
import {userContext} from './context';

export class Header extends Component{
constructor() {
    super();
}
render(){
    const user = this.context
    return(
    <header>
            <div class="wrap header--flex">
                <h1 class="header--logo"><a href="index.html">Courses</a></h1>
                <nav>
                    <ul class="header--signedout">
                        <li><a>{user.firstName}</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/signin">Sign In</a></li>
                        <li><a href="/courses/create">test</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

}
Header.contextType = userContext
export default Header;
