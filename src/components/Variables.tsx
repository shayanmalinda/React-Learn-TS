import { useEffect } from 'react';

function Variables() {

    useEffect(() => {
        testConst();
        testVar();
        testLet();
    }, []);

    const testConst = () => {
        const a = [10, 20, 30]
        a[2] = 100
        console.log("testConst - " + a)
    }

    const testVar = () => {
        for (var i = 0; i < 5; i++) {
            var b = 500
        }
        b = 1000
        console.log("testVar - " + b)
    }

    const testLet = () => {
        for (let i = 0; i < 5; i++) {
            let c = 500
        }
        // c = 1000
        // console.log("testLet - " + c)
    }

    return ( <>Testing Variables</> );
}
 
export default Variables;