import React, {Component} from 'react';

class MC extends Component{
    render(){
        return(
            <div>
                <form name="multiChoice">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</h6>
                    <div class="radio">
                        <label><input type="radio" name="optradio"/>Option 1</label>
                    </div>
                    <div class="radio">
                        <label><input type="radio" name="optradio"/>Option 2</label>
                    </div>
                    <div class="radio disabled">
                        <label><input type="radio" name="optradio"/>Option 3</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default MC;