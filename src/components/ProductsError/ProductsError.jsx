import { AccentText, ErrorWrapper, ProductError } from "./ProductsError.styled"


export const ProductsError = () => {
  return (<ErrorWrapper>
        <ProductError>
            <AccentText> Sorry, no results were found </AccentText>
             for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs.
        </ProductError>
        <AccentText>
            Try changing the search parameters.
        </AccentText>
    </ErrorWrapper>
  )
}
