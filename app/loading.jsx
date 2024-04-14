'use client'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100px auto",
  };

const loading = ({loading}) => {
    return (
        <ClipLoader
            color={'blue'}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
        />
    )
}

export default loading