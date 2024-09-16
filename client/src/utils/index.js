import { jwtDecode } from 'jwt-decode'

const decode_token = (token) => {
    if (token) {
        try {
            const decode_token = jwtDecode(token)
            const exp = new Date(decode_token.exp * 1000)
            if (new Date() > exp) {
                localStorage.removeItem("newsToken")
                return ""
            } else {
                return decode_token
            }
        } catch (error) {
             return ""
        }
    } else {
         return ""
    }
}

export default decode_token