import React from 'react'
import HOC from '../../layout/HOC'

const Notify = () => {
  return (
   <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
         Send Notification
          </span>
        </div>
        <Container>
            <Form>
                <Form.Group>
                    <Form></Form>
                </Form.Group>
            </Form>
        </Container>
        </section>
   </>
  )
}

export default HOC(Notify)