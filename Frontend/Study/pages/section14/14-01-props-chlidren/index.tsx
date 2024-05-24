import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenpage(): JSX.Element {
  return (
    <div>
      <div>++++++빨간색 파란색 초록색++++++++</div>
      <Example school="초등학교">
        <input type="text" />
        <div>저는 철수입니다</div>
        <button>클릭해주세요</button>
      </Example>
      <div>++++++빨간색 파란색 초록색++++++++</div>
    </div>
  );
}
