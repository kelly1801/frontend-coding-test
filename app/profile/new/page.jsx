import EditForm from "../../../components/editPage/EditForm";
import Link from "next/link";

export default async function EditPage() {
  return (
    <section>
      <EditForm
        post
        profileValues={{
          id: "",
          fullName: "",
          age: "",
          occupation: "",
          nickname: "",
          gender: "",
          picture: "",
        }}
      />
        <Link className='back' href={'/'}>Go back</Link>
    </section>
  );
}
