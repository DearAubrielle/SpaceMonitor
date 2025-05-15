import Users from "./Users";
import styles from './FloorPlan.module.css';
const FloorPlan: React.FC = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1>Floor Plan</h1>
            </div>

            <div>
                <Users />
            </div>
            
            

        </div>
        
        
    );
};

export default FloorPlan;

/* import ImageUpload from "@/components/floorplan/ImageUpload";
import Users from "./Users";

import styles from './FloorPlan.module.css';
import Dnd from "@/components/floorplan/Dnd";
const FloorPlan: React.FC = () => {
    return (
        <div>
            <Dnd />
            <div className={styles.container}>
                <h1>Floor Plan</h1>
                <p>Upload and manage your floor plans here.</p>
            </div>

            <div>
                <ImageUpload onImageUpload={(imageData) => console.log(imageData)} />
                <Users />
            </div>
            
            

        </div>
        
        
    );
};

export default FloorPlan; */