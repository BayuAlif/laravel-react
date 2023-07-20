import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {

const Prev = meta.links[0].url;
const Next = meta.links[meta.links.length - 1].url;
const current = meta.current_page;

    return (
            <div className=" btn-group">

                {Prev && <Link href={Prev} className="btn btn-outline">«</Link>}

                <Link className="btn btn-outline">{current}</Link>

                {Next && <Link href={Next} className="btn btn-outline">»</Link>}
            </div>
    )
}

export default Paginator