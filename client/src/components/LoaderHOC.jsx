import React from 'react'

const LoaderHOC = (wrappedComponent, LoadingMessage) => {
    function HOC(props){
        const [isLoading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading
        }
    }

  return (
    <div>LoaderHOC</div>
  )
}

export default LoaderHOC