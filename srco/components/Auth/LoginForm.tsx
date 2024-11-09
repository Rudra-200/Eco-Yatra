import { TextInput, PasswordInput, Button, Group, Stack, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuthStore } from '../../store/useAuthStore';

export function LoginForm() {
  const { signIn, signUp, loading, error } = useAuthStore();
  
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await signIn(values.email, values.password);
    } catch (error) {
      form.setErrors({ email: 'Invalid credentials' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack spacing="md" sx={{ maxWidth: 400 }} mx="auto" mt={50}>
        <Text size="xl" weight={500} align="center">Welcome to EcoYatra</Text>
        
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          {...form.getInputProps('password')}
        />

        {error && (
          <Text color="red" size="sm">
            {error}
          </Text>
        )}

        <Group position="apart">
          <Button
            variant="subtle"
            onClick={() => signUp(form.values.email, form.values.password)}
            disabled={loading}
          >
            Create Account
          </Button>
          
          <Button type="submit" loading={loading}>
            Sign In
          </Button>
        </Group>
      </Stack>
    </form>
  );
}