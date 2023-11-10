import Container from "../components/Container"
import FormWrapper from "../components/FormWrapper"
import CheckoutClient from "./CheckoutClient"

const Checkout = () => {
    return (
        <Container>
            <FormWrapper>
                <CheckoutClient />
            </FormWrapper>
        </Container>
    )
}

export default Checkout