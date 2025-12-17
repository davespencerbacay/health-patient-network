import { useEffect } from "react";

/**
 * AutoTitle
 * Updates the browser tab title whenever `title` changes.
 *
 * Props:
 * - title: string (required)
 * - suffix?: string (optional) – appended after the title
 * - prefix?: string (optional) – prepended before the title
 * - restoreOnUnmount?: boolean (default: true)
 *
 * Example:
 * <AutoTitle title="Dashboard" suffix="My App" />
 */
const AutoTitle: React.FC<{
  title: string;
  suffix?: string;
  prefix?: string;
  restoreOnUnmount?: boolean;
}> = ({ title, suffix, prefix, restoreOnUnmount = true }) => {
  useEffect(() => {
    const previousTitle = document.title;
    const _prefix = prefix ? prefix : "Health Patient Network";

    const parts = [title, _prefix, suffix].filter(Boolean);
    document.title = parts.join(" | ");

    return () => {
      if (restoreOnUnmount) {
        document.title = previousTitle;
      }
    };
  }, [title, suffix, prefix, restoreOnUnmount]);

  return null; // This component does not render anything
};

export default AutoTitle;

/* Usage Examples
Basic
<AutoTitle title="Home" />

With prefix / suffix
<AutoTitle title="Profile" prefix="User" suffix="Acme App" />

Dynamic title
<AutoTitle title={`Order #${orderId}`} />

Do not restore previous title on unmount
<AutoTitle title="Checkout" restoreOnUnmount={false} />
*/
