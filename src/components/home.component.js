
homeComponentInstance = null;

class Ajax {
    
    constructor () {
        
        if (!homeComponentInstance)
            homeComponentInstance = this;
            
        return homeComponentInstance;
    }

    initView() {

    }

    render() {
        
    }
    
}