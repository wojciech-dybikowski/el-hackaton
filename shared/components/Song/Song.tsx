import { Row } from "shared/ui"
import { Column } from "shared/ui"

export const Song =() => {
    return(
        <section>
            <Row>
                <i className="fas fa-play"></i>  
                <Column>
                    <p> 1967</p>
                    <h2>Nowhere to run</h2>
                    <h3>Martha Reeves</h3>
                </Column>
                <i className="far fa-heart"></i>
            </Row>
        </section>
    )
}