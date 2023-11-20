import React from 'react'
import {Link} from 'react-router-dom'
export default function btn() {
  return (
    <>
    <div>
   <Link to="/GroupDance"  type="button" class="btn btn-primary">GroupDance</Link>
   <Link to="/StandUp"  type="button" class="btn btn-success">StandUp</Link>
   <Link to="/SemiClassical" type="button" class="btn btn-danger">SemiClassical</Link>
   <Link to="/Band"  type="button" class="btn btn-info">Band</Link>
   <Link to="/MonoAct"  type="button" class="btn btn-primary">Mono-act</Link>
   <Link to="/SoloSinging"  type="button" class="btn btn-success">Solo-Singing</Link>
   <Link to="/Mr&Ms"  type="button" class="btn btn-danger">Mr. and Ms.</Link>
   <Link to="/Western-duet" type="button" class="btn btn-info">Western-duet</Link>
   <Link to="/login" type="button" class="btn btn-info">login</Link>
<button type="button" class="btn btn-link">Link</button>
</div>
    </>
  )
}