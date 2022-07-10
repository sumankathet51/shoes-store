import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        const date = new Date()
        const year = date.getFullYear();
        return (
            <div className="footer">
                <div className="logo flex-center">
                    Logo
                </div>
                <div className="links flex-center">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Terms Of Use</a></li>
                    </ul>
                </div>
                <div className="flex-center copyright">
                    &copy; Brand Name {year}
                </div>

            </div>
        )
    }
}

export default Footer
