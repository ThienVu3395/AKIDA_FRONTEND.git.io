import * as types from '../../Constants/Eleaning.constant';
import Swal from 'sweetalert2';

let stateHomePage = {
    
}

const HomePageReducer = (state = stateHomePage, action) => {
    switch (action.type) {
        
        default: {
            return { ...state };
        }
    }
}

export default HomePageReducer;