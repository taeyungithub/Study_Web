import ChildPage from "./02-child";

export default function ParentPage(): any {
  return (
    <>
      {/* <ChildPage count={20} /> */}
      {ChildPage({ count: 30 })}
    </>
  );
}
