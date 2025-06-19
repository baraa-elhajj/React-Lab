import { Text } from "@chakra-ui/react";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <>
          <del>{name}</del> ✅
        </>
      ) : (
        name
      )}
    </li>
  );
}

// another approach
function Item2({ name, isPacked }) {
  let itemContent = name + (isPacked ? " ✅" : " ❌");

  return <li className="item">{itemContent}</li>;
}

// using &&
function Item3({ name, importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && <em>(Importance: {importance})</em>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <Text textStyle="sm" fontWeight="light">
        <b>Description</b>: Applying conditional rendering on items, to display
        a ✅ next to the items having the prop isPacked set to true.
      </Text>
      <br />
      <Text textStyle="xl" fontWeight="bold">
        My Packing List:
      </Text>
      <ul>
        <Item name="Book" isPacked={true} />
        <Item name="Eraser" isPacked={false} />
        <Item name="Pen" isPacked={true} />
        <Item name="Ruler" isPacked={true} />
      </ul>

      <br />
      <Text textStyle="xl" fontWeight="bold">
        My 2nd Packing List:
      </Text>
      <ul>
        <Item2 name="Banana" isPacked={false} />
        <Item2 name="Watermelon" isPacked={true} />
        <Item2 name="Rasberry" isPacked={true} />
        <Item2 name="Peach" isPacked={false} />
      </ul>

      <br />
      <Text textStyle="xl" fontWeight="bold">
        My 3rd Packing List:
      </Text>
      <ul>
        <Item3 name="PC" importance={8} />
        <Item3 name="Mouse" importance={0} />
        <Item3 name="Monitor" importance={3} />
      </ul>
    </section>
  );
}
