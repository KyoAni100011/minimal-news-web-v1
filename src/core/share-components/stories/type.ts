export type Story = {
  id: string;
  title: string;
  url: string;
  site: string;
  image?: string;
};

export type Props = {
  stories: Story[];
};
