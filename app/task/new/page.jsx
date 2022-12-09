import EditTaskForm from "../../../components/profilePage/EditTask";
import Link from "next/link";

export default async function EditPage() {
    return (
        <section>
            <EditTaskForm
                post
                taskValues={{
                    id: "",
                    title: "",
                    description: "",
                    completed: "",
                    startDate: "",
                    endDate: "",
                    personId: "",
                }}
            />
            <Link classname='back' href={'/'}>go back</Link>
        </section>
    );
}