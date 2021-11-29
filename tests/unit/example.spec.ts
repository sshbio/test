import { shallowMount } from '@vue/test-utils';
import AutoComplete from '@/components/AutoComplete.vue';

describe('AutoComplete.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AutoComplete, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
