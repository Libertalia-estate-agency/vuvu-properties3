import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@vuvuproperties.co.za">
              <FaEnvelope />
              <i></i> info@vuvuproperties.co.za
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              7 Quail Close Meyersdal Eco Estate, 1448
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
