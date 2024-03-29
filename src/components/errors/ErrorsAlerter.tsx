import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Icon } from '@iconify/react'
import { Alert } from 'flowbite-react'
import React, { FC, useEffect } from 'react'
interface props {
    status: any
}
const ErrorsAlerter: FC<props> = ({ status }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [status])
    return (
        <div className=' mb-10'>
            {(status == 500 || status === "FETCH_ERROR" )&&
                <Alert
                    color="failure"
                >
                    <span className=''>
                        <span className="font-medium ">
                        שגיאה!
                        </span>
                        {' '}השרת אינו זמין כעת אנא נסו מאוחר יותר{" "}
                    </span>
                </Alert>}
            {status == 400 &&
                <Alert
                    color="failure"
                
                >
                    <span>
                        <span className="font-medium">
                       שגיאה!
                        </span>
                        {' '}המערכת זיהתתא בקשה לא חוקית{" "}
                    </span>
                </Alert>}
            {status == 409 &&
                <Alert
                    color="failure"
               
                >
                    <span>
                        <span className="font-medium">
                       שגיאה!
                        </span>
                        {' '}מספר טלפון או מייל קיימים במערכת {" "}
                    </span>
                </Alert>}
            {status == 403 &&
                <Alert
                    color="failure"
                 
                >
                    <span>
                        <span className="font-medium">
                       שגיאה!
                        </span>
                        {' '}מייל או ססמה שגויים{" "}
                    </span>
                </Alert>}



        </div>
    )
}

export default ErrorsAlerter