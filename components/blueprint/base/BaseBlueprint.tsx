// import styles from './BaseBlueprint.modue.css'; //we'll be using tailwindcss

export interface IBaseBlueprint {
    sampleTextProp: string;
}

const BaseBlueprint: React.FC<IBaseBlueprint> = ({ sampleTextProp }) => {
    //   return <div className={styles.container}>{sampleTextProp}</div>;
    return <div>{sampleTextProp}</div>;
};

export default BaseBlueprint;