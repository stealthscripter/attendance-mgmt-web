
import { ref } from "vue"

const getClasses = () => {
    const classList = ref(null)
    const error = ref(null)

    const load = () => {
        try {
            fetch("http://localhost:4000/classes")
            .then(data => data.json())
            .then(data => classList.value = data)
        }
        catch(err){
            error.value = err.message;
        }
    };

    return {classList , error , load}
} 

export default getClasses