import Image from "next/image";
import styles from "./sidebar.module.css";

import { 
    MdAttachMoney,
    MdDashboard,
    MdShoppingBag,
    MdSupervisedUserCircle
 } from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
    {
        title:"Pages",
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title:"Users",
                path:"/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title:"Products",
                path:"/dashboard/products",
                icon: <MdShoppingBag/>,
            },
            {
                title:"Transactions",
                path:"/dashboard/transactions",
                icon:<MdAttachMoney/>
            },
        ],
    },
]




const Sidebar = () => {

  return (
    <div className={styles.container}>
      <div className = {styles.user}>
        <Image src="/avatar.png" width="50" height="50" className={styles.userImage}/>
        <div className={styles.userDetail}>
          <span className={styles.userName}>
            Hello
          </span>
          <span className={styles.userTitle}>
            World
          </span>
        </div>
      </div>
      <ul className={styles.list}>
            {menuItems.map((item) => (
                <li key={item.title}>
                    <span className={styles.item}>{item.title}</span>
                    {
                        item.list.map((i) => (
                          <MenuLink item ={i} key={i.title}/>
                        ))
                    }
                </li>
            ))}
        </ul>
    </div>

  );
};

export default Sidebar;
