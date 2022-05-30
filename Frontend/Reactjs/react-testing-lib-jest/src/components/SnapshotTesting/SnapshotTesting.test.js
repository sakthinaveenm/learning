import SnapshotTesting from "./SnapshotTesting";
import renderer from 'react-test-renderer';


it('changes class when hovered',()=>{
    const component = renderer.create(
        <SnapshotTesting page="">Children data</SnapshotTesting>
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(()=>{
    console.log(tree.props);
        tree.props.onMouseOver();

    })
    // tree.props.onMouseEnter()

})