import React from 'react'

const Preloader = ({loading}) => {
  return (
    <>  
        {
            loading && (
                <>
                    <div class="loader">
                        <div class="loader-inner">
                            <div class="circle"></div>
                        </div>
                    </div>
                </>
            )
        }
    </>
  )
}

export default Preloader