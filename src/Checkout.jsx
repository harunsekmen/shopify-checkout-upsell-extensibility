import {
  reactExtension,
  Banner,
  BlockStack,
  Button,
  Image,
  InlineLayout,
  Text,
  useApi,
  useApplyCartLinesChange,
  useCartLines,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <App />);

function App() {
  const { lines } = useCartLines();
  const applyCartLinesChange = useApplyCartLinesChange();
  
  const handleAddUpsell = async (variantId) => {
    await applyCartLinesChange({
      type: 'addCartLine',
      merchandiseId: variantId,
      quantity: 1,
    });
  };

  return (
    <BlockStack border="dotted" padding="tight" borderRadius="base">
      <InlineLayout columns={['auto', 'fill', 'auto']} spacing="base" blockAlignment="center">
        <Text size="medium" weight="bold">Priority Shipping & Protection</Text>
        <Text appearance="subdued">+$4.99</Text>
        <Button kind="secondary" onPress={() => handleAddUpsell('gid://shopify/ProductVariant/123456')}>
          Add
        </Button>
      </InlineLayout>
    </BlockStack>
  );
}
