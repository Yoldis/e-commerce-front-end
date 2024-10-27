

import { toast } from 'sonner';

type Status = "success" | "error";

interface Props {
    title:string,
    description:string,
    status:Status
}

export const customToast = ({description, status, title}:Props) => {

    if(status === 'success') {
        toast.success(title, {
            description
        })
    }
    else if(status === "error") {
        toast.error(title, {
            description
        })
    }
    else {
        toast(title, {
            description
        })
    }
}